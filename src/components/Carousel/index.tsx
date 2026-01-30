import { FlatList, ImageSourcePropType } from "react-native"
import Card from "../Card"
import { styles } from "./styles";

type dataProps = {
    id: string;
    image: ImageSourcePropType;
    title: string;
    description: string;
    price: string;
}

type carouselProps = {
    data: dataProps[]
}

export default function Carousel({ data }: carouselProps) {
    return (
        <FlatList
            data={data}
            renderItem={({ item }) =>
                <Card
                    id={item.id} 
                    image={item.image}
                    title={item.title}
                    description={item.description}
                    price={item.price}
                />
            }
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.flatList}
        />
    )
}