import React from 'react'
import { Drop, DropWrapper,DropNav,DropLogo, Icon, MenuLinksWrap, DropMenuLinks, SocialsWrapper, FollowUs, Socials } from '../styles/DropdownStyle'
import { Button } from './Button';
import { menuData } from '../data/MenuData'

import { TiSocialTwitter ,TiSocialLinkedin,TiSocialFacebook } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";



const Dropdown = ({isopen,toggle}) => {

    return (
        <>
            <Drop isopen={isopen}>
                <DropWrapper>
                    <DropNav>
                        <DropLogo>
                            State
                        </DropLogo>
                        <Icon onClick={toggle}/>
                    </DropNav>
                    <MenuLinksWrap>
                        {menuData.map((item,index)=>{
                            const{title,link}=item;
                            return(
                                <DropMenuLinks to={link} key={index}>
                                    {title}
                                </DropMenuLinks>
                            );
                        })}
                    </MenuLinksWrap>
                    <SocialsWrapper>
                        <FollowUs>
                            <h3>Follow Us</h3>
                        </FollowUs>
                        <Socials>
                                <TiSocialTwitter className="social-icons"/>
                                <TiSocialLinkedin className="social-icons"/>
                                <TiSocialFacebook className="social-icons"/>
                                <FaInstagram className="social-icons"/>
                                <Button show="true" className="social-btn">
                                    Contact Us
                                </Button>
                        </Socials>
                    </SocialsWrapper>
                </DropWrapper>
            </Drop>
        </>
    )
}

export default Dropdown
