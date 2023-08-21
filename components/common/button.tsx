import { Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { colors } from "../../theme/colors";
interface buttonProps {
  btnText?: string;
  disabled?: boolean;
  btnStyle?: object;
  textColor?: string;
  textSize?: number;
  onPress?: Function;
  width?: number;
  padding?: number;
  bg?: string;
  alignItems?: string;
  justifyContent?: string;
  borderRadius?: number;
}
const Button = (props: buttonProps) => {
  return (
    <>
      <TouchableOpacity
        disabled={props.disabled}
        style={
          props.btnStyle
            ? props.btnStyle
            : {
                width: props.width,
                padding: props.padding,
                bg: props.bg ? props.bg : colors.primary_color,
                borderRadius: props.borderRadius ? props.borderRadius : 8,
                alignItems: props.alignItems ? props.alignItems : "center",
                justifyContent: props.justifyContent
                  ? props.justifyContent
                  : "center",
              }
        }
        onPress={props.onPress}
      >
        <Text
          style={{
            color: props.textColor ? props.textColor : "#fff",
            fontSize: props.textSize ? props.textSize : 15,
          }}
        >
          {props.btnText}
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default Button;
