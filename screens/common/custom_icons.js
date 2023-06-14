import { AntDesign } from "@expo/vector-icons";
import theme from '../theme';

const CustomIcon = (
    name,
    size = 22,
    style = { color:theme.COLORS.WHITE }
) => {
    console.log(name, size, style)
    return (
        <AntDesign name={name} size={size} style={style} />
    );
}

export default CustomIcon;