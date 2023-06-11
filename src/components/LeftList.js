import React from "react";
import '../styles/LeftList.scss'

// import HomeIcon from '@mui/icons-material/Home';
const LeftList =() => {
    // const handleClickHome = () => {
    //     alert('Go to Home page')
    // };
    // const handleClickExplore = () => {
    //     alert('Go to Explore page')
    // };
    // const handleClickCusPc = () => {
    //     alert('Go to Customer PC page')
    // };
    // const handleClickCart = () => {
    //     alert('Go to Cart page')
    // };
    // const handleClickSelling = () => {
    //     alert('Go to Selling page')
    // };
    // const handleClickProfile = () => {
    //     alert('Go to Profile page')
    // };
    // const handleClickPurHis = () => {
    //     alert('Go to Purhase History page')
    // };
    // const handleClickContact = () => {
    //     alert('Go to Contact page')
    // };
    // const handleClickSettings = () => {
    //     alert('Go to Settings page')
    // };
    // const handleCusSer = () => {
    //     alert('Go to Customer Service page')
    // };
        return(
            
            <div className='leftbar'>
                <div className='navbar'>
                {/* <HomeIcon/> */}
                    <a href onClick={() => this.handleClickHome()}>Home</a>
                    <a href onClick={() => this.handleClickExplore()}>Explore</a>
                    <a href onClick={() => this.handleClickCusPc()}>Custom PC</a>
                    <a href onClick={() => this.handleClickCart()}>Cart</a>
                    <a href onClick={() => this.handleClickSelling()}>Selling</a>
                    <a href onClick={() => this.handleClickProfile()}>Profle</a>
                    <a href onClick={() => this.handleClickPurHis()}>Purchase History</a>
                    <a href onClick={() => this.handleClickContact()}>Contact us</a>
                    <a href onClick={() => this.handleClickSettings()}>Settings</a>
                </div>
                <div className='helpbutton' onClick={() => {this.handleCusSer()}}>
                    <p className='needhelp'>Need Help</p>
                    <p>About Acount Management Ordering & Payment refund and FAQ</p>
                    <input type="button" value="Customer Service"/>
                </div>
            </div>          
        )
}
export default LeftList