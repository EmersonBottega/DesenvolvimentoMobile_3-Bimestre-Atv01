import styled from "styled-components/native";

export const Backgroumd = styled.View`
    text: 15;
    background-color: "#f4f7ff";
`;

export const Container = styled.KeyboardAvoidingView`
    flex: 1;
    background-color: #f0f4ff;
    justify-content: center;
    align.items: center;
`;

export const Logo = styled.Image`
    width: 60%;
`;

export const AreaInput = styled.View`
    flex-direction: row;
`;

export const Input = styled.TextInput`
    background-color: #fff;
    width: 90%;
    font-size: 17px;
    padding: 10px;
    border-radius: 8px;
    color: #121212;
    margin-bottom: 15px;
`;

export const SubmitButton = styled.TouchableOpacity`
    width: 90%;
    height: 45px;
    border-radius: 8px;
    background-color: #3b3dbf;
    margin-top: 10px;
    justify-conbtent: center;
    align-items: center;
`;

export const SubmitText = styled.Text`
    font-size: 20px;
    color: #fff;
`;

export const Link = styled.TouchableOpacity`
    margin-top: 10px;
    margin-bottom: 10px;
`;

export const LinkText = styled.Text`
    color: #171717;
`;