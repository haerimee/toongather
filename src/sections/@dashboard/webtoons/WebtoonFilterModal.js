/* eslint-disable no-unused-vars */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/no-unused-prop-types */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';

// @mui
import {
    Button,
    Checkbox,
    FormGroup,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    FormControlLabel,
    IconButton,
} from '@mui/material';

// components
import Iconify from '../../../components/iconify';

// ----------------------------------------------------------------------

WebtoonFilterModal.propTypes = {
    openModal: PropTypes.bool,
    onOpenModal: PropTypes.func,
    onCloseModal: PropTypes.func,
    modalOption: PropTypes.shape({
        title: PropTypes.string,
        width: PropTypes.string,
        items: PropTypes.array.isRequired,
    }),
    // modalOption: PropTypes.string,
    onChkBoxClick: PropTypes.func,
    onResetBtnClick: PropTypes.func,
    tagList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default function WebtoonFilterModal({
    openModal,
    onCloseModal,
    modalOption,
    onChkBoxClick,
    onResetBtnClick,
    tagList,
}) {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChkBoxClick = e => {
        console.log(e);
    };

    return (
        <div>
            <Dialog
                open={openModal}
                onClose={onCloseModal}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                maxWidth={modalOption.width === '' ? 'sm' : modalOption.width}
                hideBackdrop
            >
                <DialogTitle
                    id="alert-dialog-title"
                    sx={{ display: 'flex', justifyContent: 'space-between' }}
                >
                    {modalOption.title}

                    <IconButton onClick={onCloseModal}>
                        <Iconify icon="eva:close-fill" />
                    </IconButton>
                </DialogTitle>

                <DialogContent>
                    <FormGroup
                        row
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            alignItems: 'center',
                        }}
                    >
                        {modalOption.items.map(item => (
                            <FormControlLabel
                                key={item.id}
                                control={
                                    <Checkbox
                                        id={item.id}
                                        name={item.title}
                                        checked={tagList.some(
                                            e => e.id === item.id,
                                        )}
                                    />
                                }
                                label={item.title}
                                onChange={onChkBoxClick}
                                style={{
                                    flex: '21%',
                                    maxWidth: '21%',
                                    margin: '10px',
                                }}
                            />
                        ))}
                    </FormGroup>
                </DialogContent>
                <DialogActions sx={{ marginRight: '3%' }}>
                    <Button
                        variant="contained"
                        color="inherit"
                        autoFocus
                        onClick={() => {
                            onResetBtnClick(modalOption.items);
                        }}
                    >
                        초기화
                    </Button>
                    <Button
                        variant="contained"
                        color="mainColor"
                        onClick={onCloseModal}
                    >
                        확인
                    </Button>
                    {/* <Button
                        color="#6d9dff"
                    >
                        DDDD
                    </Button> */}
                </DialogActions>
            </Dialog>
        </div>
    );
}
