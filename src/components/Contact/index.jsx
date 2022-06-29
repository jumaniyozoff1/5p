import React,{useRef} from 'react'
import {Container,Wrapper,Register,Img,} from './style'
import Registerimg from '../../assets/img/register.jpg'
import Button from '../../Generic/Button'
import { useQuery,useMutation } from 'react-query'


const Contact = () => {
  const ismRef = useRef('')
  const familyaRef = useRef('')

  const {mutate} = useMutation(()=>{
    return fetch(``,{method:'POST',headers:{'Content-type':'application/json'},
    body:JSON.stringify({email:ismRef.current.value, password:familyaRef.current.value })}) 
    .then(res=>res.json) 
  },{
    onSuccess:(res)=>{
      
    },
    onError: (err)=>{

    }
  })
  const onSubmit = ()=>{
   mutate()
   console.log(ismRef.current.value);
   console.log(familyaRef.current.value);
  }
  return (
    <Container>
      <Wrapper>
        <Register>
          <input ref={ismRef}  placeholder='Ism' type="text" />
          <input ref={familyaRef} placeholder='Familiya' type="text" />
          <input placeholder='Kompaniya yoki firmangiz nomi' type="text" />
          <input placeholder='Telefon raqamingiz' type="text" />
          {/* <textarea placeholder='Comments/Message' name="" id="" cols="30" rows="10" ></textarea> */}
          <Button onClick={onSubmit} type={'primary'}>Send Request</Button>
        </Register>
        <Img src={Registerimg}></Img>
      </Wrapper>
    </Container>
  )
}
export default Contact
