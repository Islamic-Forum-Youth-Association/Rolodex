import { supabase } from './client';

// Fetch Permissions for a User
export const fetchPermissions = async (userId: string) => {
  const { data, error } = await supabase
    .from('permissions')
    .select('*')
    .eq('user_id', userId);
  if (error) throw error;
  return data;
};

// Check if User Has a Specific Permission
export const hasPermission = async (userId: string, permission: string) => {
  const { data, error } = await supabase
    .from('permissions')
    .select('*')
    .eq('user_id', userId)
    .eq('permission', permission);
  if (error) throw error;
  return data.length > 0;
};