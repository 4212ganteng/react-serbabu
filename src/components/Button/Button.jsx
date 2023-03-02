const Button = ({ children, ...other }) => {
    // Param pertama itu buat ngambil semua tulisan yang ada diantara tag <Button>Ini yang diambil</Button>
    // Param kedua itu ...other itu buat ngambil semua param yang dikirim
    return (
        // Dan disimpan disini
        <button {...other}>{children}</button>
    )
}

export default Button