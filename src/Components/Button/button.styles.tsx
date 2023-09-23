import styled from 'styled-components'

// type PropertiesProps = {
//   type: 'rounded' | 'squared' | 'addToCart',
//   size: 's' | 'm' | 'l'
// }

export const BaseButton = styled.button`
background: none;
border-radius: 0.5rem;
padding: 3.8% 0;
border: black solid 0.01rem;
transition: .18s ;
cursor: pointer;
width:40%
font-size:100%

`

export const LoginBtn = styled(BaseButton)`
width: 70%;
font-size: 150%;
&:hover{
    background: rgba(227, 227, 227, 0.046);
    color: rgb(93, 93, 93);
    box-shadow: 0 0.5px 1.8px rgba(0, 0, 0, 0.347);
}
`

export const RoundedButtonM = styled(BaseButton)`
padding: 1.7em 3.2em;
font-weight: 100;
font-size: clamp(0.8rem, 1.3vw, 1.2rem);
border-radius: 6.9em;
font-family: 'Segoe UI', sans-serif;
display: flex;
align-items: center;
transition: .3s linear;
&:hover{
    background: rgba(227, 227, 227, 0.046);
    color: rgba(0, 0, 0, 0.808);
    box-shadow: 0 0.5px 1.8px rgba(0, 0, 0, 0.347);
    text-shadow: 0.1px 0.1px 1.3px rgba(0, 0, 0, 0.786);

}
`

export const RoundedButtonL = styled(BaseButton)`
font-size: clamp(1.1rem,2.8vw, 1.8rem) ;
letter-spacing: 0.2rem;
padding: 1.3em 2.03em;
border-radius: 3.8rem;
border: 0.001rem solid rgba(0, 0, 0, 0.337);
font-family: 'Work Sans';
transition: .8s;
text-shadow: 0.03rem 0.03rem 0.3rem;
text-align: center;

&:hover {
    border: 0.3px solid rgba(0, 0, 0, 0);
    color: rgb(255, 255, 255);
    background: linear-gradient(180deg, rgba(126, 126, 126, 0.22) 0%, rgba(189, 189, 189, 0.129) 100%);
}
`



