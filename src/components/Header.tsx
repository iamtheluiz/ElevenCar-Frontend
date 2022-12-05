import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoMdSettings } from 'react-icons/io';
import { FaHome } from 'react-icons/fa';
import { useCar } from '../contexts/Car';

interface HeaderProps {
  title?: string
}

const Header: React.FC<HeaderProps> = ({ title = 'Sistema de Monitoramento' }) => {
  const navigate = useNavigate()
  const { serverIp } = useCar()

  useEffect(() => {
    if (serverIp === "") {
      navigate("/home")
    }
  }, [])

  return (
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
      <div>
        {window.location.pathname !== "/home" && (
          <FaHome color="white" size={22} onClick={() => navigate("/home")} style={{ cursor: 'pointer', marginRight: 12 }} />
        )}
        <Link to="/home" style={{ textDecoration: 'none' }}>
          <span style={{
            color: 'white',
            fontSize: 32,
            fontFamily: 'Poppins, sans-serif'
          }}>{title}</span>
        </Link>
      </div>
      <Link to="/settings">
        <IoMdSettings color="#FFFFFF" size={26} />
      </Link>
    </div>
  );
}

export default Header;