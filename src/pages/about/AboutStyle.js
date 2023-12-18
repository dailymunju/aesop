import styled from 'styled-components'

export const AboutWrap = styled.div`
    background-color: #fff;
    .inner { padding: 100px 0; }
    .aboutBanner {width:100%; height: 500px; background-image:url("./images/aboutBanner.png");  background-repeat:no-repeat; position: relative;
        .bannerWrap { transition: opacity 1s; position: absolute; top:50%; left:50%; transform: translate(-50%,-50%); z-index: 1; color:#fff; text-align: center; 
            h2 { font-family: 'Lato', sans-serif; font-size:60px; font-weight: 900; line-height: 70px; }
            p { margin-top:40px; font-size:16px; line-height: 30px; font-weight: 600; }
        }
    }
    .aboutPro { display: flex; justify-content: space-between; margin-bottom: 50px;
        .title { font-family: 'Lato', sans-serif; font-weight: 800;
            h3 { font-family: 'Lato', sans-serif; font-size:50px; font-weight: 900; line-height: 1; }
        }
        .top {
            ul { overflow: hidden; display: flex; justify-content: flex-end;
                li { 
                    &:first-child { margin-right:4%; }
                    img { width:100%; height:700px; object-fit: cover; }
                }
            }
            p { line-height: 35px; font-weight: 400; width: 973px; color: #666; font-size: 20px; margin: 30px auto; word-break: keep-all;}
        }
        .middleTit { margin-right: 115px; }
        .middle {
            img { width: 100%; }
            h4 { font-family: 'Lato', sans-serif; font-size:40px; margin-bottom: 30px; font-weight: 700; }
            p { line-height: 35px; font-weight: 400; width: 973px; color: #666; font-size: 20px; margin: 30px auto; word-break: keep-all; }
        }
        
        .bottom { display: flex; justify-content: space-between;
            .subTitle { font-family: 'Lato', sans-serif; font-size:40px; font-weight: 800; ; }
            ul {overflow: hidden; display: flex; justify-content: space-evenly; width: 973px; text-align: center;
                li {
                    h4 { font-size:20px; font-family: 'Lato', sans-serif; }
                    p { margin-top:20px; font-size:15px; color:#666; }
                }
            }
        }
    }
   
    
`


