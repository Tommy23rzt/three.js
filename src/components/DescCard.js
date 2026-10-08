import styled from "styled-components";

const DescCard = styled.div`
  box-sizing: border-box;
  padding: 24px 26px;
  font-size: 15px;
  line-height: 1.65;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.92);
  background: rgba(12, 6, 28, 0.55);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-left: 3px solid #57f287;
  border-radius: 14px;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.4);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 18px 40px rgba(0, 0, 0, 0.5);
  }

  @media only screen and (max-width: 768px) {
    padding: 18px 20px;
    font-size: 14px;
  }
`;

export default DescCard;
