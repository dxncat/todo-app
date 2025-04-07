export const formatDate = (date: Date | string): string => {
    const dateObj = typeof date === "string" ? new Date(date) : date

    const weekdays = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"]

    const months = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"]

    const day = dateObj.getDate().toString().padStart(2, "0")
    const month = months[dateObj.getMonth()]
    const year = dateObj.getFullYear()
    const weekday = weekdays[dateObj.getDay()]

    return `${weekday}-${day}/${month}/${year}`
}