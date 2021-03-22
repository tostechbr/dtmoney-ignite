import { useTransactions } from "../../hooks/UseTransactions";
import {Container} from "./styles"

export function TransactionsTable() {
    const {transactions} = useTransactions();

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                    <tr className="list-reponsive">
                        Listagem
                    </tr>
                </thead>

                <tbody className="tbody-1">
                    {transactions.map(transaction => (
                        <tr key={transaction.id}>

                            <td>{transaction.title}</td>

                            <td className={transaction.type}>
                                {new Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(transaction.amount)}
                            </td>
                            
                            <td className="category-date">
                                <td className="category">{transaction.category}</td>
                                <td className="date">
                                    {new Intl.DateTimeFormat('pt-BR').format(
                                        new Date(transaction.createdAt)
                                    )}
                                </td>
                            </td>
                            <td className="category-desktop">{transaction.category}</td>

                            <td className="date-desktop">
                                    {new Intl.DateTimeFormat('pt-BR').format(
                                        new Date(transaction.createdAt)
                                    )}
                            </td>
                            

                           
                           
                            
                        </tr>
                    ))}
                   
                    
                </tbody>
            </table>
        </Container>
    );
}