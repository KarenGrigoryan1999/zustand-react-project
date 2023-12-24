import { Shadow } from 'react-native-shadow-2';

const CustomShadow = ({
  style,
  children
}) => {

  return (
    <Shadow startColor={'#f8f7f7'} endColor={'#ffffff'} offset={[0, 15]} distance={18} style={{marginBottom: 30, ...style}}>{children}</Shadow>
  );0
}

export default CustomShadow;