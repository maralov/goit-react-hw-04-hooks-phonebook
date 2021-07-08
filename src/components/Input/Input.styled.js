import styled from '@emotion/styled/macro';

export const StyledInput = styled.input`
  display: block;
  width: 100%;

  border: 1px solid ${p => p.theme.colors.grey};
  padding: 4px;
  border-radius: ${p => p.theme.borderRadius}; ;
`;
