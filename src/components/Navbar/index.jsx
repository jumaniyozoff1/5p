import React from 'react';
import { Container, Header,LinkSection,Navlink, Navlogo, Wrapper  } from './style';
import { navbar } from '../../utils/navbar';
import Button from '../../Generic/Button'
import { useNavigate, Outlet} from 'react-router-dom';
// import  Button  from '../Generic/Button';
// import { ReactComponent as Logo } from '../../assets/icons/Logo.svg';


const Navbar = () => {
	const navigate = useNavigate();
	return (
		<Container >
      <Header>
          <Wrapper>
            <Navlogo onClick={()=> navigate('/home')}></Navlogo>
            <LinkSection>
            {
              navbar.map(({id,title,path}) => {
                return( 
                  <Navlink key={id} to={path}>{title}</Navlink>
                  )
                })
            }
          </LinkSection>
            <Button height={'50px'} width={'180px'} type={'primary'}>Discover More</Button>
        </Wrapper>
      </Header>
      <main>
        <Outlet/>
      </main>
		</Container>
	);
};

export default Navbar;