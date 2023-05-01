import { Wrapper } from './Contact.styled';
import { Button } from './Contact.styled';

export const Contact = ({ item: { name, number, id }, onDelete }) => {
  return (
    <Wrapper>
      <p>
        {name} : {number}
      </p>
      <Button type="button" onClick={() => onDelete(id)}>
        Delete
      </Button>
    </Wrapper>
  );
};
