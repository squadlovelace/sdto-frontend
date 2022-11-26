import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import * as React from 'react';

interface Props {
  icon: React.ReactNode;

  text: string;
}

export default function ItemEmployee({ icon, text }: Props) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <div className="flex gap-3 items-center  cursor-pointer">
        <div style={{ color: '#3a0136', height: '24px', width: '24px' }}>
          {icon}
        </div>
        <Button
          className="font-text font-semibold text-[16px] leading-[24px] letter tracking-[0.2px] text-roxo800 capitalize"
          onClick={handleClick}
        >
          {text}
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          className="ml-[-40px]"
        >
          <MenuItem
            onClick={handleClose}
            className="font-text font-semibold text-[16px] leading-[25px] tracking-[0.2px] text-roxo800"
          >
            Cadastrar Colaboradores
          </MenuItem>
          <MenuItem
            onClick={handleClose}
            className="font-text font-semibold text-[16px] leading-[25px] tracking-[0.2px] text-roxo800"
          >
            Visualisar Colaboradores
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
}
