import React from "react";
import classes from './Layout.module.css'
import Menu from '../ui/menu/menu'
import MenuToggel from "../ui/MenuToggel/MenuToggel";
import Autintificate from "../Autintificate/Autintificate";
import Registration from '../Registration/Registration'
import Autorization from '../Autorithation/Autorithation'
import { Route, Routes} from "react-router-dom";
import TypeAnceta from '../TypeAnceta/TypeAnceta';
import Information from "../Information/Information";
import MainTestPage from "../Tests/MainTestPage/MainTestPage";
import Exit from "../Exit/Exit";


class Layout extends React.Component{
        constructor(props){
            super(props);
            this.state = {
                isOpenMenu:false,
                isAuth:localStorage.getItem('refresh_token')?localStorage.getItem('refresh_token'):null,
                link:[{name:'Вхід у систему',link:'/'},
                    {name:'Зареєструватись',link:'/registration'}
                ],
                linkForAuth:[{name:'Переглянути інформацію',link:'/information'},
                    {name:'Переглянути усі анкети',link:'/typeAnceta'},
                    {name:'Вихід',link:'/exit'},
                ]
            }
        }
    onClickMenu = () =>{
        this.setState({
            isOpenMenu:!this.state.isOpenMenu
        })
    }
    onChangePage = () =>{
        this.setState({
            isOpenMenu:false
        })
    }
    onAuth = () =>{
        if(localStorage.getItem('refresh_token')){
            this.setState({
                isAuth:true
            })
        }
    }
    render(){
        return(
            <div className={classes.Layout}>
                <main>
                <Routes>
                        <Route path='/' element={<Autintificate />}>
                            <Route path='/registration' element={<Registration/>}/>
                            <Route index element={<Autorization onAuth={this.onAuth}/>}/>
                        </Route>
                        {
                            this.state.isAuth? (
                                <React.Fragment>
                                    <Route path='/exit' element={<Exit/>}/>
                                    <Route path='/typeAnceta' element={<TypeAnceta/>}/>
                                    <Route path='/test/:id' element={<MainTestPage/>}/>
                                    <Route path='/information' element={<Information/>}/>
                                </React.Fragment>
                            ):null
                        }
                        <Route path='*' element={<h1>Page not found Error 404</h1>}/>
                    </Routes>
                </main>
                <Menu isOpen={this.state.isOpenMenu} onClick ={this.onClickMenu}/>
                <MenuToggel isOpen={this.state.isOpenMenu} onChangePage = {this.onChangePage} links={localStorage.getItem('refresh_token')?this.state.linkForAuth:this.state.link}/>
            </div>
        )
    }
}

export default Layout;