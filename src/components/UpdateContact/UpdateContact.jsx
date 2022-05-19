import { useState } from "react";
import PropTypes from "prop-types";
import { Input } from "components/ContactItem/ContactItem.styled";
import { Ul, DelBtn, UpdBtn } from "components/ContactList/ContactsList.styled";
import { notifySucces, notifyWarning } from "components";

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
        
        if (contact.name === rename && contact.number === number) {
            notifyWarning('Уou made no changes!');
        } else {
            onUpdate(contact);
            notifySucces(`${name} has been updated!`);
            setTimeout(() => { handClose() }, 1000);
        };         
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