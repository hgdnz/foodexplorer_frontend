import { TbReceipt } from "react-icons/tb";

import { Container } from "./styles";

export function OrderButton({ title, loading = false, ...rest }) {
  
  return (
    <Container 
      type="button" 
      disabled={loading} 
      {...rest}
    >
      {<TbReceipt size={"3.2rem"} />}
      {loading ? "Carregando..." : title}
    </Container>
  );
}