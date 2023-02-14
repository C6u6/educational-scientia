import { useState } from "react";

type Props = {imageName: string, label: string, directory: string, width?: number, height?: number, withoutLabel?: boolean, ClassNameForDiv?: string, ClassNameForImg?: string, ClassNameForLabel?: string};

export function Icons({imageName, label, directory, width = 70, height = 70, withoutLabel = false, ClassNameForDiv, ClassNameForImg, ClassNameForLabel}: Props) {
    const [image, setImage] = useState('');
    import(`../assets/${directory}/${imageName}.svg`).then(img => setImage(img.default));

    return(
        <div className={ClassNameForDiv}>
            <abbr title={imageName.charAt(0).toUpperCase() + imageName.slice(1)}>
                <img id={label} src={image} alt={`Imagem que representa: ${label}`}
                className={ClassNameForImg}
                style={{width: width, height: height}} />
            </abbr>

            {
                !withoutLabel ? <label className={`hover:cursor-pointer`} htmlFor={label}>
                    {label}
                </label>: null
            }
        </div>
    )
};