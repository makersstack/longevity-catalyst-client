/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { RxCrossCircled } from 'react-icons/rx';

const ListInput = ({ type, getValue, setValue, dots = false, isLimit = false, max = 5, onChange, onBlur, alName, placeholder }) => {
    const [lists, setLists] = useState([]);
    const [keywordInput, setKeywordInput] = useState('');

    const [errorMsg, setErrorMsg] = useState('');

    const KEYWORD_LENGTH = max;
    useEffect(() => {
        // Update formDataObject when keywords change
        setValue({
            ...getValue,
            lists,
        });
        console.log(lists);
    }, [lists, setValue, setValue]);
    const SetKeywordFunc = () => {
        if (isLimit && lists.length >= KEYWORD_LENGTH) {
            setErrorMsg(`Can't take upto ${KEYWORD_LENGTH} !`);
        }
        else if (keywordInput.trim() !== '') {
            setLists([...lists, keywordInput]);
            setKeywordInput('');
            setErrorMsg('');
        }
    }

    const handleInputBlur = (event) => {
        SetKeywordFunc();
        if (onBlur) {
            onBlur(event);
        }
    };

    const handleInputChange = (event) => {
        const {value} = event.target;
        setKeywordInput(value);
        if (onChange) {
            onChange(event);
        }
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            SetKeywordFunc();
        }
    };

    const handleRemoveKeyword = (index, e) => {
        e.preventDefault();
        const updatedKeywords = [...lists];
        updatedKeywords.splice(index, 1);
        setLists(updatedKeywords);
        setErrorMsg('');
    };

    return (
        <div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', alignItems: 'baseline' }}>
                {lists.map((keyword, index) => (
                    <div key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', background: '#f0f0f0', padding: '5px', borderRadius: '5px',  ...(type === 'textarea' && { flexBasis: '100%' }) }}>

                        <span style={{ marginRight: '5px', display: 'flex', alignItems: 'baseline', }}>
                            {dots && <span style={{ transform: 'translateY(-2px)', marginRight: '5px', maxWidth: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'black', display: 'inline-block', flex: '0 0 10px' }}></span>}
                            {keyword}</span>    
                        <button style={{ transform: 'translateY(3px)', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center' }} onClick={(e) => handleRemoveKeyword(index, e)}>
                            <RxCrossCircled style={{ color: 'black', fontSize: '18px' }} />
                        </button>
                    </div>
                ))}
            </div>
            {errorMsg !== '' && (
                <div style={{ fontSize: '12px', color: '#ffa700', margin: '2px' }}>{errorMsg}</div>
            )}
            {type === 'textarea' ? (
                <textarea
                    value={keywordInput}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    onBlur={handleInputBlur}
                    placeholder={placeholder}
                    style={{ marginTop: '10px' }}
                    data-alname={alName ? alName : ''}
                ></textarea>
            ) : (
                <input
                    type="text"
                    value={keywordInput}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    onBlur={handleInputBlur}
                    placeholder={placeholder}
                    style={{ marginTop: '10px' }}
                    data-alname={alName ? alName : ''}
                />
            )}

        </div>
    );
};

export default ListInput;
