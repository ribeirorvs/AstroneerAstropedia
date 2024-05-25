import { Text, Image, TouchableOpacity } from 'react-native';
import { images } from '@/assets/index';
import { componentButtonStyle } from './style';
import { Link } from 'expo-router';

interface ComponentButtonProps {
    title: string;
    icon: string;
    link: string;
}

export function ComponentButton({
    title,
    icon,
    link,
    ...rest
}: ComponentButtonProps) {

    return (
        <Link href={link} asChild>
            <TouchableOpacity
                style={componentButtonStyle.component}
            >
                <Image source={images[icon]} style={componentButtonStyle.imgComponent} />
                <Text style={componentButtonStyle.txtComponent}>
                    {title}
                </Text>
            </TouchableOpacity>
        </Link>
    )
}