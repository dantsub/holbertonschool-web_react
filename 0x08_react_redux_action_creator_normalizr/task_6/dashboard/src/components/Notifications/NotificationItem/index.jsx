export default function NotificationItem({ type, children, ...props}) {
    return (
        <li data-notification-type={type} {...props}>{children}</li>
    )
}