"use client"
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
const Contacts =  () => {
    const [contactsAp,setContactsAp] =useState([])

    useEffect(() => {
      getData();
    }, [])
    

    const getData = async ()  =>{
        console.log('dsa')
        const contactsApi= await fetch('http://127.0.0.1:8000/api/contacts/1')
        .then(res => res.json())
        .then(data => {
          console.log('holi',data);
          setContactsAp(data)
        }); 
    }
    
    const contacts = useSelector((state) => state.contacts); 
    //console.log(contacts)

  return (
    <div>holi{contactsAp.map(i=><div key={i.id}>{i.name}<br/></div>)}</div>
  )
}

export default Contacts