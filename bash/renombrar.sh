for archivo in *.svg; do
    if [[ $archivo =~ ^(.+?)\.svg$ ]]; then
        nombre_base="${BASH_REMATCH[1]}"
        
        IFS='-' read -ra partes <<< "$nombre_base"
        nuevo_nombre="Icon"

        for parte in "${partes[@]}"; do
            if [[ $parte =~ ^[0-9]+$ ]]; then
                nuevo_nombre="${nuevo_nombre}${parte}"
            else
                nuevo_nombre="${nuevo_nombre}${parte^}"
            fi
        done

        nuevo_nombre="${nuevo_nombre}.svg"
        
        mv "$archivo" "$nuevo_nombre"
        echo "Renombrado: $archivo a $nuevo_nombre"
    fi
done
