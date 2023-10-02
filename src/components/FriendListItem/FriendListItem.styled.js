import { styled } from "styled-components";

export const FriendsItem = styled.li`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 10px;
    border-bottom: 2px solid #fff;
`;

export const FriendsStatus = styled('span')(({ $isOnline }) => {
    return {
    backgroundColor: $isOnline  ? '#259799': '#C4DFE6',
    borderRadius: '50%',
    width: '10px',
    height: '10px',
}
})