import { useState } from "react";
import PropTypes from "prop-types";
import { Input } from "components/ContactItem/ContactItem.styled";
import { Ul, DelBtn, UpdBtn } from "components/ContactList/ContactsList.styled";
import toast from "react-hot-toast";

export const UpdateContact = ({ name, number, onUpdate, handClose }) => {
    const [rename, setRename] = useState(name);
    const [renumber, setReNumber] = useState(number);

  
  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    name === "name" ? setRename(value) : setReNumber(value);
    };

    
    const handlerSubmit = (e) => {
        e.preventDefault();  
        
    const contact = {
      name: rename,
      number: renumber,
    };

        onUpdate(contact);
        toast.success(`${name} has been updated!`, {
            duration: 2000,
            style: {
                fontWeight: 600,
                fontSize: "18px",
                backgroundColor: "#1A9525",
                color: "white",
                width: "700px",
                height: "40px",
            }
        });
        setTimeout(() => { handClose() }, 1000);
        
  };

    return (
        <>
            <Input type="text" name="name" value={rename} onChange={handleInputChange} autoComplete="off" label="Name"/>
            <Input type="tel" name="number" value={renumber} onChange={handleInputChange} autoComplete="off" label="Number"/>
            <Ul>
                <li>
                    <DelBtn type="button"
                        onClick={handClose}
                    >No</DelBtn>
                </li>
                <li>
                    <UpdBtn
                        type="button"
                        onClick={handlerSubmit}
                    >Update</UpdBtn>
                </li>
            </Ul>
        </>
    )
};


UpdateContact.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  onUpdate: PropTypes.func,
  handClose: PropTypes.func,
};