import React from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import css from "./OwnCabinet.module.css";
import {addUserThunk} from '../../redux/cabinet-reducer';

const OwnCabinetForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <Field component={"input"} type="text" name="name" placeholder="Имя" />
            <button>Добавить пользователя</button>
        </form>
    )
}
const OwnCabinetFormRedux = reduxForm({form: 'OwnCabinetForm'})(OwnCabinetForm);

const OwnCabinet = (props) => { 
    let usersElements = props.users.map((t)=>{

        return(
            <div>
                <li>
                    <div className={css.item + " flex aic"}>
                        <div className={css.avatar}>
                            <img src={
                                t.avatar 
                                ? t.avatar
                                : "https://media.istockphoto.com/photos/learn-to-love-yourself-first-picture-id1291208214?k=20&m=1291208214&s=170667a&w=0&h=6-AdcacaQelZJy5ASr9A9cmueE6PmMtSabYE72ZYz9w="
                            } />
                        </div>
                        <span className={css.name}>
                            {t.name}
                        </span>
                        <button className={css.itemButton + " " + css.danger} onClick={()=>{
                            props.removeUserThunk(t.id)
                        }}>&#10006;</button>
                    </div>
                </li>
            </div>
        )
    });

    const onSubmit = (formData) => {
        console.log(formData);
        props.addUserThunk({name: formData.name, avatar: null })
    }
    return(
        <div className="container mt-5 ">
            <h2 className={"tac"}>Личный кабинет</h2>
            <ul>
                <p>Список пользователей:</p>
                {usersElements}
            </ul>
            <OwnCabinetFormRedux {...props} onSubmit={onSubmit}/>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas reiciendis veritatis eaque eveniet excepturi expedita dolores ipsam est provident voluptate quam delectus consequatur, consequuntur rerum repellendus nisi omnis, quae debitis?
            </p>
        </div>
    )
}


export default connect(null,{addUserThunk})(OwnCabinet);