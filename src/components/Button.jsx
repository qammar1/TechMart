import styled from "styled-components";


export const Buttoncontainer = styled.button`
    text-transform: capitalize;
    font-size:1rem;
    background:transparent;
    margin-right:0.3rem;
    border:0.095rem solid var(--lightblue);
    border-color:${prop=>prop.cart?"var(--mainyellow)":"var(--lightblue)"};
    color:var(--lightblue);
    color:${props=>props.cart?"var(--mainyellow)":"var(--lightblue)"};
    border-radius:0.5rem;
    padding:0.2rem,0.5rem;
    transition:all 0.5s ease-in-out;
    &:hover{
      background:var(--lightblue);
      background:${prop=>prop.cart?"var(--mainyellow)":"var(--lightblue)"};
      color:var(--mainblue);
    }
    &:focus{
      outline:none;
    }

  `;