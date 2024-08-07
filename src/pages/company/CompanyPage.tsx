import { useState } from 'react'
import { HeaderAction } from '../../components/HeaderAction'
import { Table } from '../../components/Table'
import { ColumnType } from '../../types/table/column'
import { FormCompanyModal } from './components/FormCompanyModal'

export function CompanyPage() {
    const [openForm, setOpenForm] = useState(false)

    const handleCancel = () => {
        setOpenForm(false)
    }

    const handleCreate = () => setOpenForm(true)

    const columns: ColumnType[] = [
        {
            id: 'razaoSocial',
            label: 'Razão Social',
        },
        {
            id: 'CNPJ',
            label: 'CNPJ',
        },
        {
            id: 'nomeFantasia',
            label: 'Nome Fantasia',
        },
        {
            id: 'perfil',
            label: 'Perfil',
        }
    ]
    return (
        <>
            <HeaderAction
                onCreate={handleCreate}
            />

            <Table<any>
                columns={columns}
                rows={[
                    {
                        razaoSocial: 'Super Terminais',
                        CNPJ: '75487582353485',
                        nomeFantasia: "Terminal",
                        perfil: 'Outro'
                    }
                ]}
                actions={[
                    {
                        type: 'show',
                        onClick: (row: any) => () => { },
                    },
                    {
                        type: 'edit',
                        onClick: (row: any) => () => { },
                    },
                    {
                        type: 'delete',
                        onClick: (row: any) => () => { },
                    },
                ]}
            />

            <FormCompanyModal
                open={openForm}
                onClose={handleCancel}
                data={[]}
            />
        </>
    )
}