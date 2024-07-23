import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function TopBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?profession=${encodeURIComponent(searchTerm.trim())}`);
    setSearchTerm('');
  };

  return (
    <>
      <div className="search">
        <form className='d-flex gap-1' onSubmit={handleSearchSubmit}>
          <label htmlFor="search">
            <i className="bi bi-search mx-2" style={{ fontSize: '1.5rem', color: 'cornflowerblue' }}></i>
            <input
              type="text"
              id="search"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Buscar por profesión..."
              className='w-100 p-2'
            />
          </label>
          <button type="submit" className="btn w-25 btn-primary">
            Buscar
          </button>
        </form>
      </div>

      <div className="user-actions">
        <button>
          <a href="#"><i className="bi bi-person-add" style={{ fontSize: '1.5rem', color: 'cornflowerblue' }}></i></a>
        </button>
        <button>
          <a href="#"><i className="bi bi-person" style={{ fontSize: '1.5rem', color: 'cornflowerblue' }}></i></a>
        </button>
        <button>
          <a href="#"><i className="bi bi-box-arrow-right" style={{ fontSize: '1.5rem', color: 'cornflowerblue' }}></i></a>
        </button>
      </div>
    </>
  );
}

export default TopBar;
