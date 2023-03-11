import propTypes from 'prop-types';
import { Button } from './Button.module';

export const ButtonStyled = ({ onClick }) => (
  <Button onClick={onClick} type="button">
    Load more
  </Button>
);
ButtonStyled.propTypes = {
  onClick: propTypes.func.isRequired,
};
