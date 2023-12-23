import styled from 'styled-components'
import { Colors } from '../../style'

export const Card = styled.div`
  max-width: 420px;
  position: relative;
  background-color: ${Colors.whiteSecondary};
  border: none;
  border-radius: 0.75rem;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.35);
  margin: 0 auto;
  gap: 2rem;

  img {
    width: 100%;
    height: 100%;
    max-height: 220px;
    object-fit: fit;
    border-radius: 0.75rem 0.75rem 0 0;
  }

  p {
    color: ${Colors.TitleGray};
    font-size: 1rem;
    line-height: 1.125rem;
    margin-bottom: 1rem;
  }
`

export const NomeRes = styled.h3`
  font-size: 18px;
  font-weight: bold;
`

export const Content = styled.div`
  padding: 8px;
`

export const Infos = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;

  h3 {
    font-size: 18px;
    font-weight: bold;
    margin-right: 8px;
    color: ${Colors.darkGreen};
  }

  .center {
    display: flex;
    text-align: center;
  }

  img {
    width: 20px;
    height: 20px;
  }
`

export const Tag = styled.span`
  padding: 6px 8px;
  display: inline-block;
  background-color: ${Colors.green};
  color: ${Colors.whiteSecondary};
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  margin-right: 8px;
`
export const CTA = styled.span`
  padding: 0.5rem;
  display: inline-block;
  border-radius: 0.5rem;
  background-color: ${Colors.green};
  color: ${Colors.whiteSecondary};
  text-align: center;
  font-size: 1rem;
  font-weight: bold;
  margin-right: 8px;
  width: 100%;
`

export const Tags = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  font-size: 12px;
`
