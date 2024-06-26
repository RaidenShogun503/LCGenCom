import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import './home.css';
import lcversion from './data/version.txt';
import Cmdbeginner_vi from './Handle/HandleCmdbeginner_vi';
import Lightcones_vi from './Handle/HandleLightcones_vi';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import HandleSpawn_vi from './Handle/HandleSpawn_en';

function ShowSpawn_en() {
    const location = useLocation();
    const [version, setVersion] = useState('');

  useEffect(() => {
    // Đọc nội dung từ tệp version.txt khi component được tạo ra
    fetch(lcversion)
      .then(response => response.text())
      .then(data => setVersion(data))
      .catch(error => console.error('Error fetching version:', error));
  }, []);



//   const currentComponent = getComponentByPath(location.pathname);

  const languageOptions = [
    // { value: '简体中文', label: '简体中文 (CHS)' },
    // { value: '繁體中文', label: '繁體中文 (CHT)' },
    // { value: 'Deutsch', label: 'Deutsch (DE)' },
    { value: 'English', label: 'English (EN)' },
    // { value: 'Español', label: 'Español (ES)' },
    // { value: 'Français', label: 'Français (FR)' },
    // { value: 'Bahasa Indonesia', label: 'Bahasa Indonesia (ID)' },
    // { value: '日本語', label: '日本語 (JA)' },
    // { value: '한국어', label: '한국어 (KO)' },
    // { value: 'Português', label: 'Português (PT)' },
    // { value: 'Русский язык', label: 'Русский язык (RU)' },
    // { value: 'ภาษาไทย', label: 'ภาษาไทย (TH)' },
    { value: 'Tiếng Việt', label: 'Tiếng Việt (VI)' },
  ];

  const handleChange = (selectedOption) => {
    console.log('Selected option:', selectedOption);
    switch (selectedOption.value) {
        case 'Tiếng Việt':
            window.location.href = '/lang=vi/spawn';
            break;
        case '简体中文':
            window.location.href = '/lang=chs';
            break
        default:
            window.location.href = '/lang=en/spawn';
      }
    // Thực hiện các xử lý khác ở đây nếu cần
  };

  return (
    <div className="homepage">
      <Container>
        <div style={{display: 'flex'}}>
          <h3 className='title'>LC Tools</h3>
          <p className='title-right'>Version: {version}</p>
        </div>
        <hr/>
        <div style={{display: 'flex'}}>
            <div className='true-slidebar'>
                <div className='slidebar-home'>
                    <p className='slidebar'>Feature</p>
                    <p className='slidebar-option'>
                        <Link to="/lang=en/cmdbeginner" className='slidebar-link'>Command For Beginner</Link>
                    </p>
                    <p className='slidebar-option'>
                        <Link to="/lang=en/lightcones" className='slidebar-link'>Lightcones</Link>
                    </p>
                    <p className='slidebar-option'>
                        <Link to="/lang=en/avatars" className='slidebar-link'>Character</Link>
                    </p>
                    <p className='slidebar-option'>
                        <Link to="/lang=en/items" className='slidebar-link'>Items</Link>
                    </p>
                    <p className='slidebar-option'>
                        <Link to="/lang=en/scene" className='slidebar-link'>Scene</Link>
                    </p>
                    <p className='slidebar-option'>
                        <Link to="/lang=en/spawn" className='slidebar-link-on'>Spawn</Link>
                    </p>
                    <p className='slidebar-option'>
                        <Link to="/lang=en/relics" className='slidebar-link'>Relics</Link>
                    </p>
                    <p className='slidebar-option'>
                        <Link to="/lang=en/perfectrelics" className='slidebar-link'>Perfect Relics</Link>
                    </p>
                    <hr/>
                    <p className='slidebar'>Language</p>
                    <Select
                    options={languageOptions}
                    onChange={handleChange}
                    isSearchable={false}
                    />
                </div>
            </div>
            <div className='main-content'>
                <HandleSpawn_vi/>
            </div>
        </div>
        
      </Container>
    </div>
  );
}

export default ShowSpawn_en;
