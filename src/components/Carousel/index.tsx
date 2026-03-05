import { FlatList, ImageSourcePropType } from "react-native"
import Card from "../Card"
import { styles } from "./styles";

type dataProps = {
    id: number | null;
    name: string;
    description: string;
    price: number;
    category_id: number;
    created_by: number;
    status: string;
    created_at: string;
    updated_at: string;
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
                    image={require("@/assets/images/backgroundImage.jpg")}
                    title={item.name}
                    description={item.description}
                    price={item.price}
                />
            }
            keyExtractor={(item) => item.id?.toString() ?? ""}
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.flatList}
        />
    )
}