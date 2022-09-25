function handleLoginRedirect(role) {
  switch (role) {
  case 'admin':
    return '/admin/manager';
  case 'seller':
    return '/seller/products';
  default:
    return '/customer/products';
  }
}

export default handleLoginRedirect;
