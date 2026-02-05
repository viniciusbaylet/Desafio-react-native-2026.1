import { Eye, Pencil, Trash } from "lucide-react-native";
import { FlatList, ImageSourcePropType, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { useState } from "react";
import ModalExcluir from "../ModalExcluir";
import ModalVisualizar from "../ModalVisualizar";

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
    const [modalVisualizeVisible, setModalVisualizeVisible] = useState(false);
    const [modalEditVisible, setModalEditVisible] = useState(false);
    const [modalDeleteVisible, setModalDeleteVisible] = useState(false);
    const [idPublicacao, setIdPublicacao] = useState<string | null>(null);

    const start = (page - 1) * PAGE_SIZE;
    const end = start + PAGE_SIZE;

    const paginated = data.slice(start, end);
    const totalPages = Math.ceil(data.length / PAGE_SIZE);

    function excluirPublicacao(idPublicacao: string) {
        console.log(`Usuário ${idPublicacao} excluído com sucesso!`);
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
                            <TouchableOpacity onPress={() => { setModalVisualizeVisible(true); setIdPublicacao(item.id) }}>
                                <Eye size={20} color={styles.icons.color} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Pencil size={20} color={styles.icons.color} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { setModalDeleteVisible(true); setIdPublicacao(item.id) }}>
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

            <ModalVisualizar
                id={idPublicacao}
                visible={modalVisualizeVisible}
                onCancel={() => {
                    setModalVisualizeVisible(false);
                    setIdPublicacao(null);
                }}
            />

            <ModalExcluir
                visible={modalDeleteVisible}
                onConfirm={() => {
                    if (!idPublicacao) return;
                    excluirPublicacao(idPublicacao);
                    setModalDeleteVisible(false);
                    setIdPublicacao(null);
                }}
                onCancel={() => {
                    setModalDeleteVisible(false);
                    setIdPublicacao(null);
                }}
            />

        </View>
    )
}