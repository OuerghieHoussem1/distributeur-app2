import React, { useEffect, useState } from 'react'
import {MdOutlineNotifications} from "react-icons/md"
import {AiFillCaretDown} from "react-icons/ai"
import { useDispatch, useSelector } from 'react-redux';
import { editDrinkController, emptyDrinkController, loadDrinks } from '../controllers/drink';
import { Button, Label, Modal, TextInput } from 'flowbite-react';
export default function Main() {

    


    const dispatch = useDispatch()


  const devices = useSelector(state => state.devicesReducer)
  const drinks = useSelector(state => state.drinksReducer)


  const connectedUser = useSelector(state => state.authReducer)


  const [showModal, setshowModal] = useState({drink:null, isShown:false});

  const emptyDrink = (drink) => {
    dispatch(emptyDrinkController(drink))
  }

  const changeQunatityModal = (drink) => {
    setshowModal({drink:drink,isShown:true})
  }

  const editDrink = (drink) => {
    dispatch(editDrinkController(drink))
  }

    useEffect(() => {
        if(connectedUser) dispatch(loadDrinks())
    }, [connectedUser]);



    useEffect(() => {
        console.log(drinks)
    }, [drinks]);
    
  return (
    <div className='px-7 py-3'>
        <div className='flex flex-row items-center mb-9'>
            <p className='grow text-4xl'>Welcome <span className='font-bold'>{connectedUser?.name}</span> !</p>
            <div className='flex flex-row items-center gap-9'>
                <MdOutlineNotifications size={30} color="gray"/>
                <div className='flex flex-row items-center gap-2'>
                    <AiFillCaretDown size={20} color="gray"/>
                    <p>{connectedUser?.name}</p>
                    <div className='w-11 h-11 rounded-full bg-sky-900'></div>
                </div>
            </div>
        </div>
        <div className='grid grid-cols-3 gap-9'>{drinks.map((drink, index)=><p><Drink changeQunatityModal={changeQunatityModal} emptyDrink={emptyDrink} drink={drink}/></p>)}</div>
        {/* <div className='flex gap-9'>{devicesToUser.map((dev)=><p className='cursor-pointer hover:text-opacity-70 duration-150' onClick={()=>hideOthers(dev._id)}>{dev.deviceName}</p>)}</div> */}
        {/* {devicesToUser.map((device,index)=><Device user={connectedUser} device={device} isShown={device.isShown}/>)} */}
        <React.Fragment>
        <Modal
            show={showModal.isShown}
            size="md"
            popup={true}
            onClose={()=>setshowModal({...showModal,isShown:false})}
        >
            <Modal.Header />
            <Modal.Body>
            <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                Change quantity for {showModal.drink?.drinkName}
                </h3>
                <div>
                <div className="mb-2 block">
                    <Label
                    htmlFor="newQuantity"
                    value="New quantity"
                    />
                </div>
                <TextInput
                    id="newQuantity"
                    placeholder={showModal.drink?.drinkQuantity}
                    value={showModal.drink?.drinkQuantity}
                    required={true}
                    onChange={e => setshowModal({...showModal,drink:{...showModal.drink,drinkQuantity:e.target.value}})}
                />
                </div>
                <div>
                </div>
                <div className="w-full">
                <Button onClick={()=>editDrink(showModal.drink)}>
                    Save
                </Button>
                </div>
            </div>
            </Modal.Body>
        </Modal>
        </React.Fragment>
    </div>
  )
}

const Drink = ({drink, emptyDrink, changeQunatityModal}) => {
    return(
    <>
        <div style={{backgroundColor:drink.drinkQuantity<=0?"#ff000066":"#ffffff"}} className='shadow-lg cursor-pointer px-9 py-4 rounded-lg hover:scale-105 duration-200'>
            <div className='font-bold flex flex-row justify-between items-center mt-7'>
                <p>{drink.drinkName}</p>
                <p style={{color:drink.drinkQuantity>=3200?"green":drink.drinkQuantity>=1600?"orange":"red"}} >{drink.drinkQuantity}</p>
            </div>
            <div className='flex flex-row justify-between items-center mt-7'>
                <div onClick={()=>emptyDrink(drink)} className='bg-gray-100 hover:bg-gray-200 hover:scale-105 duration-200 border-2 cursor-pointer px-4 py-2 rounded-xl'>Empty</div>
                <div onClick={()=>changeQunatityModal(drink)} className='bg-gray-100 hover:bg-gray-200 hover:scale-105 duration-200 border-2 cursor-pointer px-4 py-2 rounded-xl'>Change quantity</div>
            </div>
        </div>
    </>)
}
