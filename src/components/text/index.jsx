import { Text } from 'react-native';

export default ({
  children,
  ...others
}) => {
  return (
    <Text
      allowFontScaling={false}
      suppressHighlighting={true}
      {...others}
    >{children}</Text>
  );
}
