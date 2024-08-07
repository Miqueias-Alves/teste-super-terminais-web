import { Grid } from '@mui/material'
import { useState } from 'react'
import { Input } from '../../../components/Input'
import { InputFile } from '../../../components/Input/InputFile'
import { Modal } from '../../../components/Modal'
import { ModalAction } from '../../../components/Modal/ModalAction'
import { RadioGroup } from '../../../components/Radio/RadioGroup'
import { Select } from '../../../components/Select'
import { ModalType } from '../../../types/modal/modal'

interface Props extends ModalType {
    data: any[]
}

type PeopleType = 'pessoaJuridica' | 'pessoaFisica' | 'pessoaEstrangeira'

export function FormCompanyModal({ data, onClose, open }: Props) {
    const [value, setValue] = useState<PeopleType>('pessoaJuridica')
    const [profile, setProfile] = useState('funcional')

    return (
        <>
            <Modal
                title={'Cadastrar Empresa'}
                open={open}
                onClose={onClose}
            >
                <Grid
                    container
                    spacing={3}
                    component='form'
                    onSubmit={() => { }}
                    noValidate
                >
                    <Grid item xs={12}>
                        <RadioGroup
                            row
                            name='radioGroup'
                            value={value}
                            onChange={(event) => {
                                setValue(event.target.value as 'pessoaJuridica' | 'pessoaFisica')
                            }}
                            options={[
                                {
                                    id: 'pessoaFisica',
                                    name: 'Pessoa Física'
                                },
                                {
                                    id: 'pessoaJuridica',
                                    name: 'Pessoa Juridica'
                                },
                                {
                                    id: 'pessoaEstrangeira',
                                    name: 'Pessoa Estrangeira'
                                }
                            ]}
                            sx={{
                                justifyContent: ['flex-start', 'flex-end'],
                            }}
                        />
                    </Grid>

                    {
                        value === 'pessoaFisica' ?
                            (
                                <>
                                    <Grid item xs={12}>
                                        <Input
                                            name='nome'
                                            label={'Nome'}
                                            fullWidth
                                            required
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Input
                                            name='CPF'
                                            label={'CPF'}
                                            fullWidth
                                            required
                                        />
                                    </Grid>

                                </>

                            ) : (
                                <>
                                    <Grid item xs={12}>
                                        <Input
                                            name='razaoSocial'
                                            label={'Razão Social'}
                                            fullWidth
                                            required
                                        />
                                    </Grid>
                                    {
                                        value === 'pessoaEstrangeira' ?
                                        (
                                            <Grid item xs={12}>
                                                <Input
                                                    name='identificadorEstrangeiro'
                                                    label={'Identificador Estrangeiro'}
                                                    fullWidth
                                                    required
                                                />
                                            </Grid>
                                        ) : (
                                            <Grid item xs={12}>
                                                <Input
                                                    name='CNPJ'
                                                    label={'CNPJ'}
                                                    fullWidth
                                                    required
                                                />
                                            </Grid>
                                        )
                                    }
                                </>

                            )
                    }

                    <Grid item xs={12}>
                        <Input
                            name='nomeFantasia'
                            label={'Nome Fantasia'}
                            fullWidth
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Select
                            name='lang'
                            value={profile}
                            options={[
                                { id: 'patrimonial', name: 'Patrimonial' },
                                { id: 'funcional', name: 'Funcional' },
                                { id: 'corporativo', name: 'Corporativo' },
                            ]}
                            onChange={(event: any) => {
                                setProfile(event.target.value)
                            }}
                            sx={{ '& fieldset': { borderColor: 'transparent !important' } }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <InputFile
                            accept={'image/*'}
                        />
                    </Grid>
                </Grid>

                <Grid item xs={12}>
                    <ModalAction
                        onCancel={onClose}
                        isSubmit
                    />
                </Grid>
            </Modal>
        </>
    )
}