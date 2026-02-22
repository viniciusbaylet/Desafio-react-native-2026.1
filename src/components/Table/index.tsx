import { Eye, Pencil, Trash } from "lucide-react-native";
import { FlatList, ImageSourcePropType, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { useState } from "react";
import ModalVisualize from "../ModalVisualize";
import ModalEdit from "../ModalEdit";
import ModalDelete from "../ModalDelete";

type dataProps = {
    id: string;
    image: ImageSourcePropType;
    title: string;
    description: string;
    price: string;
}

type tableProps = {
    data: dataProps[]
}

const PAGE_SIZE = 8;

export default function Table({ data }: tableProps) {

    const [page, setPage] = useState(1);
    const [modalType, setModalType] = useState<"visualize" | "edit" | "delete" | null>(null);
    const [idPublication, setIdPublication] = useState<string | null>(null);

    const start = (page - 1) * PAGE_SIZE;
    const end = start + PAGE_SIZE;

    const paginated = data.slice(start, end);
    const totalPages = Math.ceil(data.length / PAGE_SIZE);

    function deletePublication(idPublication: string) {
        console.log(`Publicação ${idPublication} excluída com sucesso!`);
    }

    function editPublication(idPublication: string) {
        console.log(`Publicação ${idPublication} editada com sucesso!`);
    }

    return (
        <View style={styles.table}>
            <View style={styles.cabecalho}>
                <View style={styles.cabecalhoProduct}>
                    <Text style={styles.cabecalhoText}>Produto</Text>
                </View>
                <View style={styles.cabecalhoPrice}>
                    <Text style={styles.cabecalhoText}>Preço</Text>
                </View>
                <View style={styles.actions}>
                    <Text style={styles.cabecalhoText}>Ações</Text>
                </View>
            </View>

            <FlatList
                data={paginated}
                renderItem={({ item }) =>
                    <View style={styles.line}>
                        <View style={styles.lineProduct}>
                            <Text style={styles.lineText}>{item.title}</Text>
                        </View>
                        <View style={styles.linePrice}>
                            <Text style={styles.lineText}>R$ {item.price}</Text>
                        </View>
                        <View style={styles.actions}>
                            <TouchableOpacity onPress={() => { setModalType("visualize"); setIdPublication(item.id) }}>
                                <Eye size={20} color={styles.icons.color} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { setModalType("edit"); setIdPublication(item.id) }}>
                                <Pencil size={20} color={styles.icons.color} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { setModalType("delete"); setIdPublication(item.id) }}>
                                <Trash size={20} color={styles.icons.color} />
                            </TouchableOpacity>
                        </View>
                    </View>
                }
                keyExtractor={(item) => item.id}
            />

            <View style={styles.pagination}>
                <TouchableOpacity disabled={page === 1} onPress={() => setPage(page - 1)} >
                    <Text style={styles.cabecalhoText}>◀ Anterior</Text>
                </TouchableOpacity>
                <Text style={styles.cabecalhoText}>{page} / {totalPages}</Text>
                <TouchableOpacity disabled={page === totalPages} onPress={() => setPage(page + 1)}>
                    <Text style={styles.cabecalhoText}>Próxima ▶</Text>
                </TouchableOpacity>
            </View>

            <ModalVisualize
                id={idPublication}
                visible={modalType === "visualize"}
                onCancel={() => {
                    setModalType(null);
                    setIdPublication(null);
                }}
            />

            <ModalEdit
                id={idPublication}
                visible={modalType === "edit"}
                onConfirm={() => {
                    if (!idPublication) return;
                    editPublication(idPublication);
                    setModalType(null);
                    setIdPublication(null);
                }}
                onCancel={() => {
                    setModalType(null);
                    setIdPublication(null);
                }}
            />

            <ModalDelete
                visible={modalType === "delete"}
                onConfirm={() => {
                    if (!idPublication) return;
                    deletePublication(idPublication);
                    setModalType(null);
                    setIdPublication(null);
                }}
                onCancel={() => {
                    setModalType(null);
                    setIdPublication(null);
                }}
            />

        </View>
    )
}