import styled from 'styled-components'
import theme from '../../config/theme'

const RightColumn = styled.div`
    width: 30%;
    padding-left: 20px;
    display: flex;
    background: ${theme.colors.main.light};
    flex-direction: column;
    @media screen and (max-width: 1000px) {
        width: 100%;
        padding-left: 0px;
        vertical-align: top;
      }
`

export default RightColumn
