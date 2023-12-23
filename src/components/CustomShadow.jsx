import { Shadow } from 'react-native-shadow-2';

const CustomShadow = ({
  style,
  children
}) => {

  return (
    <Shadow startColor={'#e4e1e1'} endColor={'#faf9f9'} offset={[0, 15]} distance={18} style={{...style, marginBottom: 30}}>{children}</Shadow>
  );
}

export default CustomShadow;