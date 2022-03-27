import styled from "styled-components";
import { colors } from "../../Utils/Constances";

export const AavatarWrapper = styled.div`
    background-color: ${colors.blue};
    color: ${colors.white};
    font-size: 1rem;
    font-weight: 400, Regular;
    border-radius: 50%;
    height: 40px;
    width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
`;