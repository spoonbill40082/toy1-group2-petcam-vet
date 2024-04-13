import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

export const ChartNav = styled.nav`
  width: 90%;
  margin-top: 2rem;

  border-bottom: 1px solid #dddddd;
  display: flex;
`;

export const ChartNavUl = styled.ul`
  display: flex;
  gap: 2rem;
`;

export const ChartNavLi = styled.li`
  padding: 0.5rem 1rem;
  cursor: pointer;
`;

export const ChartListUl = styled.ul`
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const ChartListLi = styled.li`
  height: 3rem;
  padding: 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: white;

  border: 1px solid rgba(51, 51, 51, 0.2);
  border-radius: 10px;
  box-shadow: 1px 1px 10px rgba(51, 51, 51, 0.2);
`;

export const ListLiLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const ListLiLeftImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  box-shadow: 1px 1px 10px rgba(51, 51, 51, 0.2);
`;

export const ListLiRight = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
