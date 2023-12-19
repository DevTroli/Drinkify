import styled from 'styled-components'

const Spinner = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #1e6c1e;
  position: relative;

  &::after {
    content: '';
    width: 100%;
    height: 100%;
    background-color: #fff;
    border-radius: 50%;
    animation: spinner 1s infinite linear;
    position: absolute;
    top: 0;
    left: 0;
  }

  &::after:nth-child(2) {
    transform: rotate(45deg);
  }

  &::after:nth-child(3) {
    transform: rotate(90deg);
  }

  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

export default Spinner
