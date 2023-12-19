import styled from 'styled-components'

export const IntroContent = styled.section`
width:100%; height: auto; background-color: #fff;
    .title { font-family: 'Lato', sans-serif;  text-align:center; margin-bottom: 40px;
        .sub_title { font-size:20px; color:#666; font-weight: 600; }
        .main_title { font-size:40px; font-weight: 600; }
    }
    .moto {    max-width: 960px; margin: 0 auto;
        ul { display: flex; justify-content: space-between;
            li { text-align: center;
                &:first-child { border-right: 1px solid #ddd; padding-right: 100px;}
                h4 { font-family: 'Lato', sans-serif; font-size:25px; font-weight: 600; margin-top:35px; }
                p { font-size:20px; line-height: 30px; color:#8a8a8a; font-weight: 500; margin-top:30px; }
            }
        }
    }
`
export const HairContent = styled.section` 
    width:100%; height:600px; background-color:#faf6ec; 
    ul {
        li { width:50%; height:600px; float:left; position:relative;
            &.adventImg { background-image: url("./images/hairContent.png"); background-size:auto 120%; background-position: 54%; background-repeat:no-repeat; }
            div {
                width:50%; position:relative; left:50%; transform: translateX(-50%); margin-top: 130px; transition: opacity 1s; 
                h3 { 
                    font-family: 'Lato',sans-serif;
                    font-size: 40px;
                    font-weight: 500;
                    word-break: keep-all;
                    line-height: 50px;
                    letter-spacing: -1px;
                }
                p { font-size: 19px; line-height:35px; font-weight: 400; margin:50px 0px; word-break:keep-all; }
                .read { width:40%; display:block; font-family: 'Lato', sans-serif; font-weight:bold;    line-height:20px;
                    img { position:relative; left:20px; top:0; width: 20px; }
                }
            }
        }
    }
`
export const ReadCon = styled.section`
    width:100%; height:auto;
    .title { font-family: 'Lato', sans-serif;text-align:center; margin-bottom: 40px;
        .sub_title { font-size:20px; color:#666; font-weight: 600; }
        .main_title { font-size:40px; font-weight: 600; }
    }
    .readBox { overflow: hidden;
        ul {
            li {
                float:left; width:31.33%; margin-right:3%;
                div {
                    &.imgBox {
                         width:100%; height:300px; background-size:auto 200%; background-repeat:no-repeat; background-position:0; 
                    }
                    &.img1  {background-image:url("./images/read01.jpg");}
                    &.img2  {background-image:url("./images/read02.jpg");}
                    &.img3  {background-image:url("./images/read03.jpg");}
                }
                &:last-child{margin-right: 0;}
                h4 { margin-top:25px; font-size:20px; font-weight: 600; }
                p { font-size:16px; color:#666; margin-top:25px; }
            }
        }
    }
`

export const VisitCon = styled.section`
    width:100%;
    ul {
        li {
            &.top { position:relative; width:1600px; height:600px; background-image:url("./images/store_bg02.jpg");
                background-attachment: fixed; background-size:auto 100%; background-repeat:no-repeat; overflow:hidden;
                &::before { content:''; width:100%; height:100%; background:rgba(0,0,0,0.4); position:absolute; left:0; top:0; }
                div { position:absolute; top:50%; left:10%; transform: translateY(-50%); color:#fff;
                    h4 { font-size:35px; font-weight: bold; }
                    p { margin-top:50px; font-size:16px; }
                }
            }
            &.bottom { position:relative; width:100%; height: 960px;
                div { position:absolute; top:25%; left:250px; width:20%;
                    h4 { font-family: 'Lato', sans-serif; font-size:20px; color:#666; font-weight: 600; }
                    h3 { font-size:50px; line-height:60px; font-weight: 600; margin:30px 0px 50px 0px; }
                    p { font-size:20px; color:#666; font-weight: 500; margin-bottom:100px; }
                    .read { width:40%; display:block; font-family: 'Lato', sans-serif; font-weight:bold;    line-height:20px;
                        img { position:relative; left:20px; top:0; width: 20px; }
                    }
                }
                .visitImg { width: 50%; height:660px; background-color:#ddd; background-image: url("./images/store_bg03.webp"); background-size:auto 100%; background-repeat:no-repeat; background-position:90%; position:absolute; top:15%; left:50%; }
            }
        }
    }


`