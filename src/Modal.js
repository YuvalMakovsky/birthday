import React, { useRef,useState,useEffect }  from 'react';
import {images} from './data'

export const Modal = ({ show,showModal,peopleLength,person,setPerson,addPerson,updatePerson}) => {

  const showHideClassName = show ? "modal display-block" : "modal display-none";

  const nameInput = useRef(null);
  const ageInput = useRef(null);
  const [image, setImage] = useState(null);
  const [exist,setExist] =useState(false);

  
  
  useEffect(() => {
      if(show){
        setExist(!person || Object.keys(person).length === 0?false:true);
      }
  },[show]);

  useEffect(() => {
    if(exist){
        nameInput.current.value = person.name;
        ageInput.current.value = person.age;
        setImage(person.image);
      }
        },[exist]);

  function handleSubmit() {

      let personArr ={name:nameInput.current.value,age:ageInput.current.value,image:image};
    if(exist){
        updatePerson(Object.assign({id:person.id},personArr));
      }
      else{
        addPerson(Object.assign({id:peopleLength+1},personArr));
      }
     closeModal();
}

    function closeModal(){
        nameInput.current.value = null;
        ageInput.current.value = null;
        setExist(false);
        setImage(null);
        setPerson(null);
        showModal(!show);
    }

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
      <div className="w-full">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor ="name">
                    Name
                </label>
                <input ref={nameInput} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text"  placeholder="Please enter name" />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor ="age">
                    Age
                </label>
                <input ref={ageInput} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="number" placeholder="Please enter age" />
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor ="image">
                    Image
                </label>
                <div className='flex items-center justify-between'>
                {images.map(name => (  
                        <div className="ml-2" key={name.id} >  
                            <img  onClick={() => setImage(name.id)} className={image == name.id ? 'selected imageModal cursor-pointer' : 'imageModal cursor-pointer'} src={name.url} alt={name.id} />
                        </div>  
                        ))}  
                  
                </div>
            </div>
            <div className="flex items-center justify-end">
                <button className='secondary-button bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded'  type="button" onClick={() => handleSubmit()}>
                    {exist?'Edit':'Add'} Person
                </button>
                &nbsp;&nbsp;
            <button className='secondary-button bg-gray-500 hover:bg-gray-400 text-white font-bold py-2 px-4 border-b-4 border-grey-700 hover:border-grey-500 rounded' type="button" onClick={() => closeModal()}>
                Close
                </button>
            </div>
        </div>
        </div>
      
      </section>
    </div>
  );
};

