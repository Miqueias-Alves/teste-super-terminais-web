import {
    ArrowDropDown,
    ArrowDropUp,
    UnfoldMoreOutlined,
} from '@mui/icons-material'
import {
    Box,
    Table as MuiTable,
    Stack,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableProps,
    TableRow,
} from '@mui/material'

import { Error } from '../../components/Error'
import { addAlpha } from '../../helpers/addAlpha'

import { ColumnType } from '../../types/table/column'
import { Actions, ActionType } from '../Actions'
import { Loading } from '../Loading'

export interface TableActionType<T> extends Omit<ActionType, 'action'> {
    onClick?: (row: T) => void
}

interface Props<T> extends TableProps {
    columns: ColumnType[]
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    rows?: any[]
    actions?: TableActionType<T>[]
    hasActions?: boolean
    orderBy?: string
    onOrderBy?: (value: string) => void
    order?: 'DESC' | 'ASC'
    isLoading?: boolean
    isFetching?: boolean
    error?: Error | null
    pagination?: {
        page: number
        limit?: number
        count?: number
        onChangePage: (newPage: number) => void
    }
}

export function Table<T>({
    columns = [],
    rows = [],
    actions = [],
    hasActions,
    orderBy,
    onOrderBy,
    order,
    isLoading,
    isFetching,
    error,
    pagination,
    children,
    ...rest
}: Props<T>) {

    return (
        <TableContainer
            sx={{
                maxHeight: 'auto',
                '&::-webkit-scrollbar': {
                    width: 6,
                    height: 6,
                    background: 'transparent',
                },
                '&::-webkit-scrollbar-track': {
                    background: 'transparent',
                },
                '&::-webkit-scrollbar-thumb': {
                    background: (theme) => theme.palette.background.default,
                },
            }}
        >
            <Box height={5} width='100%'>
                {isFetching && (
                    <Loading
                        mode='linear'
                        sx={{ padding: 0, alignItems: 'flex-start' }}
                    />
                )}
            </Box>
            <MuiTable stickyHeader aria-label='sticky table' {...rest}>
                <TableHead>
                    <TableRow>
                        {columns.map((column) => (
                            <TableCell
                                key={column.id}
                                align={column?.align}
                                sx={{
                                    minWidth: column?.minWidth,
                                    textTransform: 'uppercase',
                                    background: (theme) =>
                                        addAlpha(theme.palette.secondary.light, 0.6),
                                    color: (theme) => theme.palette.secondary.contrastText,
                                    borderBottom: (theme) =>
                                        `1px solid ${theme.palette.secondary.light}`,
                                    cursor: onOrderBy ? 'pointer' : 'default',
                                    verticalAlign: 'top',
                                }}
                                onClick={() => onOrderBy?.(column.id)}
                            >
                                {onOrderBy ? (
                                    <Stack
                                        flexDirection='row'
                                        justifyContent={
                                            column?.align === 'right' ? 'flex-end' : 'flex-start'
                                        }
                                        alignItems='center'
                                    >
                                        {column.label}
                                        {orderBy === column.id && (
                                            <>
                                                {order === 'ASC' && <ArrowDropDown color='inherit' />}
                                                {order === 'DESC' && <ArrowDropUp color='inherit' />}
                                                {!order && (
                                                    <UnfoldMoreOutlined
                                                        color='inherit'
                                                        fontSize='small'
                                                    />
                                                )}
                                            </>
                                        )}
                                    </Stack>
                                ) : (
                                    column.label
                                )}
                            </TableCell>
                        ))}

                        {(!!actions?.length || hasActions) && (
                            <TableCell
                                sx={{
                                    textTransform: 'uppercase',
                                    background: (theme) =>
                                        addAlpha(theme.palette.secondary.light, 0.6),
                                    borderBottom: (theme) =>
                                        `1px solid ${theme.palette.secondary.light}`,
                                    cursor: onOrderBy ? 'pointer' : 'default',
                                    verticalAlign: 'top',
                                }}
                            >
                                {' '}
                            </TableCell>
                        )}
                    </TableRow>
                </TableHead>

                <TableBody>
                    {!!rows?.length &&
                        rows?.map((row, rowIndex) => {
                            return (
                                <TableRow hover key={rowIndex}>
                                    {columns.map((column, columnIndex) => {
                                        const value = row[column.id]
                                        return (
                                            <TableCell
                                                key={columnIndex}
                                                align={column?.align}
                                                sx={{ border: 'none' }}
                                            >
                                                {column?.format && typeof value === 'number'
                                                    ? column.format(value)
                                                    : value}
                                            </TableCell>
                                        )
                                    })}

                                    {!!actions?.length && (
                                        <TableCell align='right' sx={{ border: 'none' }}>
                                            <Actions
                                                color='inherit'
                                                options={actions?.map((item) => ({
                                                    type: item?.type ?? 'add',
                                                    disabled: item?.disabled,
                                                    router: item?.router,
                                                    title: item?.title,
                                                    action: item?.onClick
                                                        ? () => item.onClick?.(row)
                                                        : undefined,
                                                    module: item?.module,
                                                    permission: item?.permission,
                                                }))}
                                            />
                                        </TableCell>
                                    )}
                                </TableRow>
                            )
                        })}

                    {children}
                </TableBody>
            </MuiTable>

            {!rows.length && isLoading && <Loading mode='circular' />}

            {!rows.length && <Error error={error} />}

        </TableContainer>
    )
}
